import base64

with open(
    "src/assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4", "rb"
) as video_file:
    video_data = video_file.read()

# Encode the binary data as base64
base64_encoded_data = base64.b64encode(video_data).decode("utf-8")
print(base64_encoded_data)
