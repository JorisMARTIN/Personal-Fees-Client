import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ForgotPassword from './components/ForgotPassword';
import { StyledCard } from '../components/styled';
import { Link } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../regex';
import { Checkbox, FormControlLabel } from '@mui/material';
import type { ISignIn } from '../../../interfaces/auth.interface';
import AuthService from '../../../api/auth.service';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit: SubmitHandler<ISignIn> = async (data) => {
    const res = await AuthService.signIn(data);
    console.log(res);
  };

  return (
    <StyledCard variant="outlined">
      {/* <SitemarkIcon /> */}
      <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            {...register('email', {
              required: { value: true, message: 'Please enter a valid email' },
              pattern: { value: EMAIL_REGEX, message: 'Please enter a valid email' },
            })}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={errors.email !== undefined ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <MuiLink
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
            </MuiLink>
          </Box>
          <TextField
            {...register('password', {
              required: { value: true, message: 'Please enter a valid password' },
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  'Password must be between 8 and 35 characters long. It must contain at least one lowercase letter, one uppercase letter, one number and one special character.',
              },
            })}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={errors.password !== undefined ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          htmlFor="rememberMe"
          control={<Checkbox {...register('rememberMe')} id="rememberMe" value="remember" color="primary" />}
          label="Remember me"
        />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained">
          Sign in
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <span>
            <Link to="/auth/sign-up" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
    </StyledCard>
  );
}
