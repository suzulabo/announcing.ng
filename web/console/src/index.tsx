import { render } from 'solid-js/web';
import { BaseStyle } from '#base/BaseStyle';

render(
  () => (
    <>
      <BaseStyle /> hello
    </>
  ),
  document.getElementById('root') as HTMLElement
);
