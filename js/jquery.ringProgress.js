(function($) {
				$.fn.ringProgress = function(options) {
					//生成modal
					var ringProgressHtml = '<div class="percent-circle percent-circle-left">' +
						'<div class="left-content"></div>' +
						'</div>' +
						'<div class="percent-circle percent-circle-right">' +
						'<div class="right-content"></div>' +
						'</div>';

					var ringProgressObj = $(ringProgressHtml); 
					var settings = $.extend({}, {
						open: false
					}, options);
					this.each(function() {
						var RingProgress = $(this);
						RingProgress.prepend(ringProgressObj.clone());

						var size = RingProgress.data("size");
						var leftContent = RingProgress.find(".left-content");
						var rightContent = RingProgress.find(".right-content");

						//先是rightContent旋转角度从0增加到180度，
						//然后是leftContent旋转角度从0增加到180度
						var angle = size * 360;
						if(angle > 360) {
							leftContent.css('transform', 'rotate(180deg)');
							rightContent.css('transform', 'rotate(180deg)');
						} else {
							if(angle > 180) {
								leftContent.css('transform', 'rotate(' + (angle - 180) + 'deg)');
								rightContent.css('transform', 'rotate(180deg)');
							} else {
								rightContent.css('transform', 'rotate(' + angle + 'deg)');
							}
						}
					});
				};
			})(jQuery);