/*
 * Gridless.js
 * version 0.1
 *
 * created by Ben G. Thompson @pixelsailor
 */

(function($) {
	$.fn.gridless = function() {
		
		this.each(function() {
			var $this = $(this),
				// get the Sass defined gutter based on the parent left-margin
				parent_margin = $this.parent().css('margin-left'),
				// remove "px" and make positive
				gutter = parseFloat(parent_margin)*-1;
				
			$this.width(function() {
				var nu_width = $this.width() - gutter - .5;
				// subtract a small amount to counter inconsistant brower rounding
				// of fractional widths
				return nu_width;
			});
		})
		// returns the jQuery object to allow for chaining
		return this;
	}
})(jQuery);
