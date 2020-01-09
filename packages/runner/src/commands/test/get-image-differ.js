const { createGraphicsMagickDiffer } = require('@lokiwilaufork/diff-graphics-magick');
const { createLooksSameDiffer } = require('@lokiwilaufork/diff-looks-same');

function getImageDiffer(engine, config) {
  switch (engine) {
    case undefined:
    case 'looks-same': {
      return createLooksSameDiffer(config);
    }
    case 'gm': {
      return createGraphicsMagickDiffer(config);
    }
    default: {
      throw new Error(`Unsupported engine "${engine}"`);
    }
  }
}

module.exports = { getImageDiffer };
