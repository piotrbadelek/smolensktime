"use strict";

module.exports = function smolensk(date) {
    if (date instanceof Date === false) {
		throw new TypeError("debil inside");
	};
	const unixTime = Math.floor(date / 1000);
	// thanks to https://www.reddit.com/r/Polska/comments/u0cc4q/unix_epoch_jest_passe_francja_odlicza_czas_w_nowy/i4585t5/ za kalkulację
	return unixTime - 1270881667;
};