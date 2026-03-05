import { Box, Button, FormControl, FormLabel, Stack, TextField, Typography } from '@mui/material';
import { StyledCard } from '../components/styled';
import { Link } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../regex';
import type { ISignUp } from '../../../interfaces/auth.interface';
import AuthService from '../../../api/auth.service';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>();

  const handleFormSubmit: SubmitHandler<ISignUp> = async (data) => {
    const res = await AuthService.signUp(data);
    console.log(res);
  };

  return (
    <StyledCard variant="outlined">
      <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
        Sign up
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
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <FormControl>
            <FormLabel htmlFor="firstname">First name</FormLabel>
            <TextField
              {...register('firstname', { required: { value: true, message: 'First name is required' } })}
              id="firstname"
              type="text"
              name="firstname"
              error={errors.firstname !== undefined}
              helperText={errors.firstname?.message}
              placeholder="John"
              autoComplete="firstName"
              autoFocus
              fullWidth
              variant="outlined"
              color={errors.firstname !== undefined ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastname">Last name</FormLabel>
            <TextField
              {...register('lastname', { required: { value: true, message: 'Last name is required' } })}
              id="lastname"
              type="text"
              name="lastname"
              error={errors.lastname !== undefined}
              helperText={errors.lastname?.message}
              placeholder="Doe"
              autoComplete="lastName"
              required
              fullWidth
              variant="outlined"
              color={errors.lastname !== undefined ? 'error' : 'primary'}
            />
          </FormControl>
        </Stack>
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
            error={errors.email !== undefined}
            helperText={errors.email?.message}
            placeholder="your@email.com"
            autoComplete="email"
            required
            fullWidth
            variant="outlined"
            color={errors.email !== undefined ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            {...register('password', {
              required: { value: true, message: 'Please enter a valid password' },
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  'Password must be between 8 and 35 characters long. It must contain at least one lowercase letter, one uppercase letter, one number and one special character.',
              },
            })}
            id="password"
            type="password"
            name="password"
            error={errors.password !== undefined}
            helperText={errors.password?.message}
            placeholder="********"
            autoComplete="password"
            required
            fullWidth
            variant="outlined"
            color={errors.password !== undefined ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
          <TextField
            {...register('confirmPassword', {
              required: true,
              validate: (value, formValues) => value === formValues.password,
            })}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword !== undefined}
            helperText={errors.confirmPassword && 'Password does not match'}
            placeholder="********"
            autoComplete="confirmPassword"
            required
            fullWidth
            variant="outlined"
            color={errors.confirmPassword !== undefined ? 'error' : 'primary'}
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained">
          Sign up
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <span>
            <Link to="/auth/sign-in" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
    </StyledCard>
  );
}
