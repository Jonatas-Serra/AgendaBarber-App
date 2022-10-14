/* eslint-disable @typescript-eslint/no-empty-interface */
import { RootStackParamList } from './src/routes/auth.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
