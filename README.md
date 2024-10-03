## AI Image Generator Documentation

This project is an AI image generator application built using React, Node.js, Express, and MongoDB. It leverages the DALL-E 2 AI model to create images from user-provided prompts. Users can generate unique images, share them on the website, and browse a community showcase of AI-generated art.

### Inputs

* **User Name:** The user's name is required when creating a new post.
* **Prompt:** A text description that instructs the DALL-E 2 model on what image to generate. Users can either input their own prompts or click the "Surprise Me" button to use a random, pre-determined prompt.

### Outputs

* **AI-Generated Image:** The DALL-E 2 model will output a unique image based on the user's prompt.
* **Post:** The generated image, user name, and prompt will be combined into a post that is saved to the MongoDB database and displayed in the Community Showcase section.

### How to Use

1. **Creating a Post:**
   - Enter your name in the "Your Name" field.
   - Enter an image description prompt in the "Prompt" field or click "Surprise Me" for a random prompt.
   - Click "Generate" to have DALL-E 2 create an image based on the provided prompt.
   - Once the image is generated, click "Share on website" to save it as a post and display it in the Community Showcase.
2. **Browsing the Community Showcase:**
   - Scroll to the "Community Showcase" section.
   - Browse the collection of AI-generated images.
   - Use the search bar to find specific images by user name or prompt keywords.
