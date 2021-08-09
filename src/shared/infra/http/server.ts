import { app } from './app';

app.listen(3333, () => {
  console.log(`Server has been started as ${process.env.NODE_ENV}mode`);
});
