const convertDayNumberToDayCode = require('./dayNumberToDayCode');

module.exports = (() => {
	'use strict';

	/**
	 * Extracts the day of the month from a {@link Date} instance
	 * and returns the day code for the day of the month.
	 *
	 * @function
	 * @param {Date} date
	 * @returns {String|null}
	 */
	function convertDateToDayCode(date) {
		if (date === null || date === undefined) {
			return null;
		}

		return convertDayNumberToDayCode(date.getDate());
	}

	return convertDateToDayCode;
})();


