# Secure Access Documentation

## Magic Access Route
- URL: `http://127.0.0.1:4000/magic`
- This is your secure gateway to the admin dashboard
- Keep this URL private and share only with authorized personnel

## Credentials
- Access Code: `occoto-admin-2024`
- JWT Secret: `occoto-secure-access-2024`
- Store these securely and never share them publicly

## Local Application Connection
1. Main Application (Occoto Website):
   - URL: `http://127.0.0.1:4000`
   - Development: `npm run dev`

2. Local Web Application:
   - URL: `http://localhost:3000`
   - Health Check Endpoint: `http://localhost:3000/api/health`
   - Development: `npm run dev`

## API Endpoints
1. Authentication:
   - POST `/api/verify-access`
   - Body: `{ "password": "your-access-code" }`
   - Returns: JWT token

2. Health Check:
   - GET `/api/health`
   - Returns: `{ "status": "ok", "timestamp": "ISO-string" }`

## Protected Routes
- `/secure-dashboard/*` - All dashboard routes are protected
- Requires valid JWT token in cookies

## Security Features
1. JWT Token Authentication
2. HTTP-only Cookies
3. Secure Session Management
4. Protected API Routes
5. Environment Variable Configuration

## Environment Variables (.env.local)
```
JWT_SECRET=occoto-secure-access-2024
ACCESS_PASSWORD=occoto-admin-2024
```

## Important Notes
1. Always access through HTTPS in production
2. Regularly rotate access codes and secrets
3. Monitor access logs for suspicious activity
4. Keep this documentation secure and private
5. Update passwords periodically

## Emergency Contacts
- Technical Support: info@occoto.com

## Backup Access
In case of emergency or system lockout:
1. Access the .env.local file
2. Verify JWT_SECRET and ACCESS_PASSWORD
3. Restart the application if needed
4. Contact technical support if issues persist 