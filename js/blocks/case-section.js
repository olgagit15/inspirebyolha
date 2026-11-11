(function (global) {
'use strict';

  global.PortfolioBlocks = global.PortfolioBlocks || {};
  global.PortfolioBlocks.caseSection = function (section, body, translate) {
    return '<section class="cs rv" id="s-' + section.id + '"><h2>' + translate(section.h) + '</h2>' + body + '</section>';
  };
})(window);
