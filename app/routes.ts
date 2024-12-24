import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  layout('routes/game/layout.tsx', [route('game', 'routes/game/game.tsx')]),
] satisfies RouteConfig;
