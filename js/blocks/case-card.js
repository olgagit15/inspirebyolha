(function (global) {
'use strict';

  global.PortfolioBlocks = global.PortfolioBlocks || {};
  global.PortfolioBlocks.caseCard = function (c, t, u, cover) {
  return '<a class="case-card rv" href="#/case/' + c.id + '" data-id="' + c.id + '" data-seg="' + c.seg + '">' + cover(c) +
    (c.team ? '<span class="tag case-tag">' + u(c.teamLabel || 'teamProject') + '</span>' : '') +
    '<div class="case-body"><h3 class="case-title">' + t(c.title) + '</h3>' + (t(c.line) ? '<p class="case-line">' + t(c.line) + '</p>' : '') +
    '<div class="card-foot"><span class="btn btn-primary btn-sm">' + u('readCase') + ' <span class="arr" aria-hidden="true">→</span></span></div></div></a>';
};
})(window);
