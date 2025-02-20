export default () => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

function env(variable: string): string {
  if (process.env[variable]) {
    return process.env[variable] as string;
  }
  throw new Error(`Environment variable ${variable} is not defined`);
}

