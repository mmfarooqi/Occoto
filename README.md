# Occoto Website

This is the official website for Occoto, featuring a secure access system for authorized personnel.

## Features

- Modern, responsive design
- Secure access system
- Protected dashboard
- Local application integration

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
JWT_SECRET=your-secret-key
ACCESS_PASSWORD=your-access-password
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser.

## Deployment

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in Vercel's project settings
4. Deploy!

## Security Notes

- Keep your `.env.local` file secure and never commit it to version control
- Regularly update the access password
- Monitor access logs for suspicious activity

## License

Private - All rights reserved
