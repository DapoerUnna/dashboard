from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Dimension, Metric
import json

property_id = '468521060'

client = BetaAnalyticsDataClient()

request = RunReportRequest(
    property=f"properties/{property_id}",
    dimensions=[Dimension(name="city")],
    metrics=[Metric(name="activeUsers")],
    date_ranges=[DateRange(start_date="2020-03-31", end_date="today")],
)

response = client.run_report(request)

data = []
for row in response.rows:
    data.append({
        'city': row.dimension_values[0].value,
        'activeUsers': row.metric_values[0].value
    })

with open('data.json', 'w') as f:
    json.dump(data, f)