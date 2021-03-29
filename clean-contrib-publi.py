import requests
import pandas as pd
import numpy as np
import os
from os.path import join, dirname
from dotenv import load_dotenv
from decouple import config

HEADERS = {'Authorization':os.getenv('HEADERS_AUTH_BASIC',config('HEADERS_AUTH_BASIC'))}
SCANR_API_URL = os.getenv('SCANR_API_URL_CONTRIBUTE',config('SCANR_API_URL_CONTRIBUTE'))

print(f'***SCANR_API_URL***: {SCANR_API_URL}')

url = str(SCANR_API_URL) + '?max_results=500&where={"email": "test@endtoend.com"}'
r = requests.get(url, headers=HEADERS)
data = r.json().get('data')
total = r.json().get('meta', {}).get('total')

print(f'Total number of documents retured: {total}')

for doc in data:
    _id = doc.get('_id')
    url = f'{SCANR_API_URL}/{_id}'
    try:
        r = requests.delete(url, headers=HEADERS)
    except:
        print(r.text)
