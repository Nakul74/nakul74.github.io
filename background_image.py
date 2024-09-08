import cv2
arr = cv2.imread('images/background.png')
print(arr.shape)

from PIL import Image

# Open your original image
original_image = Image.open('images/Nakul_Chamariya.jpeg')

# Dimensions for the new image
new_width, new_height = 3500, 5000

# Create a new white image with the specified dimensions
new_image = Image.new('RGB', (new_width, new_height), 'white')

# Get the size of the original image
orig_width, orig_height = original_image.size

# Calculate padding from the right edge
padding_percentage = 0.1
padding_width = int(new_width * padding_percentage)

# Calculate position for the original image (right middle with padding)
x = new_width - orig_width - padding_width
y = (new_height - orig_height) // 2

# Ensure x is not negative
x = max(x, padding_width)

# Paste the original image onto the new image
new_image.paste(original_image, (x, y))

# Save the result
new_image.save('images/background.jpg')
