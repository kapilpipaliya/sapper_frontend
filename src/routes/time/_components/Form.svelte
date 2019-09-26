<script>
  import clsx from 'clsx';
  import { clean } from './utils';

  let className = '';
  export { className as class };

  const props = clean($$props);

  $: classes = clsx(
    className
  );
</script>

<form {...props} class="{classes}" accept-charset="UTF-8">
  <slot />
</form>