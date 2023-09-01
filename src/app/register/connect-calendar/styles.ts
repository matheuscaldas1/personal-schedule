import { Box, styled, Text, Button } from '@verossim/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',

  [`> ${Button}`]: {
    height: '46px',
  },
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray600',
  padding: '$4 $6',
  borderRadius: '$md',

  marginBottom: '$2',

  [`> ${Text}`]: {
    color: '$gray100',
  },

  [`> ${Button}`]: {
    height: '38px',

    '& :not(disabled)': {
      color: '$ignite300',
      border: '2px solid $colors$ignite500',
    },
  },
})

export const AuthError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})
