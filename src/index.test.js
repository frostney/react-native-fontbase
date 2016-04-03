import test from 'ava';
import fontBase from './index';

test(t => {
  fontBase.base = 16;

  fontBase.define('h1', 2);

  t.is(fontBase(1), 16);
  t.is(fontBase(2), 32);
  t.is(fontBase.get('h1'), 32);
});
