import imageUrlBuilder from '@sanity/image-url'; // Import the package
import client from './sanityClient'; // Import your Sanity client configuration

// Create a builder instance
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source: any) {
    return builder.image(source);
}
