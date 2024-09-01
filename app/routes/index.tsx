import { Box } from '@yamada-ui/react'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <Box>
      <p>Hello, {name}!</p>
      <Counter />
      <p>Yamada-ui Test</p>
    </Box>,
    { title: name }
  )
})
