const fontSizes = {};

const fontBase = multiplier => multiplier * fontBase.base;

fontBase.base = 16;

fontBase.define = (name, multiplier) => {
  fontSizes[name] = multiplier;
};

fontBase.get = name => fontBase(fontSizes[name]);
fontBase.styleFor = name => ({
  fontSize: fontBase.get(name),
});

export default fontBase;
