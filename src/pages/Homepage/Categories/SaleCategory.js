import React, { useEffect } from 'react'
	;

const SaleCategory = (props) => {

	useEffect(() => {
		document.getElementById('saleIcon').innerHTML = `<?xml version="1.0" encoding="utf-8"?>
		<!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
		<svg version="1.1" width="151.1" id="icon_category-sale" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
			 y="0px" viewBox="0 0 151.1 135.6" style="enable-background:new 0 0 151.1 135.6;" xml:space="preserve">
		<style type="text/css">
			.st0{fill:#EFEFEF;}
			.st1{fill:none;stroke:#EE5F3B;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;}
		</style>
		<g id="sale_icon_shine" transform="translate(118.533 93.054)">
			<path id="Path_5676" class="st0" d="M30.9,14.5c-3.4,0-6.6-1.4-9-3.8c-2.4-2.4-3.8-5.6-3.8-9C18,0.8,17.2,0,16.3,0
				c-0.9,0-1.7,0.8-1.7,1.7c0,3.4-1.3,6.7-3.8,9c-2.4,2.4-5.7,3.8-9.1,3.8c-0.9,0-1.7,0.8-1.7,1.7c0,0,0,0,0,0l0,0
				C0,17.2,0.8,18,1.7,18l0,0c7.1,0,12.8,5.7,12.9,12.8c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7l0,0c0-7.1,5.7-12.9,12.8-12.9
				c0,0,0,0,0,0h0c0.9,0,1.7-0.8,1.7-1.7S31.8,14.5,30.9,14.5L30.9,14.5L30.9,14.5z"/>
		</g>
		<g id="sale_icon_shine-2" transform="translate(0 124.103)">
			<path id="Path_5676-2" class="st0" d="M11,5.1c-1.2,0-2.4-0.5-3.2-1.3C6.9,3,6.4,1.8,6.4,0.6C6.4,0.3,6.1,0,5.8,0
				C5.4,0,5.2,0.3,5.2,0.6c0,1.2-0.5,2.4-1.3,3.2C3,4.7,1.8,5.1,0.6,5.1C0.3,5.1,0,5.4,0,5.7c0,0,0,0,0,0l0,0c0,0.3,0.3,0.6,0.6,0.6
				l0,0c2.5,0,4.5,2,4.6,4.5c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6c0-2.5,2-4.6,4.5-4.6c0,0,0,0,0,0h0c0.3,0,0.6-0.2,0.6-0.6
				C11.6,5.4,11.3,5.1,11,5.1C11,5.1,11,5.1,11,5.1L11,5.1L11,5.1z"/>
		</g>
		<g id="sale_icon_shine-3" transform="translate(63.363)">
			<path id="Path_5676-3" class="st0" d="M17.6,8.3c-1.9,0-3.8-0.8-5.2-2.1C11,4.8,10.3,2.9,10.3,1c0-0.5-0.4-1-0.9-1s-1,0.4-1,0.9
				c0,0,0,0,0,0.1c0,1.9-0.8,3.8-2.1,5.1C4.8,7.5,2.9,8.3,1,8.3c-0.5,0-1,0.4-1,1l0,0c0,0.5,0.4,1,1,1l0,0c4,0,7.3,3.3,7.3,7.3
				c0,0.5,0.5,1,1,0.9c0.5,0,0.9-0.4,0.9-0.9c0-4,3.3-7.3,7.3-7.3c0,0,0,0,0,0h0c0.5,0,1-0.4,1-1S18.1,8.2,17.6,8.3L17.6,8.3L17.6,8.3
				z"/>
		</g>
		<g id="SaleGroup">
		<g id="icon_sale" transform="translate(20.934 44.252)">
			<g id="Group_2464">
				<path id="Ellipse_x5F_29" class="st1" d="M42.8,0c23.6,0,42.8,19.2,42.8,42.8S66.4,85.6,42.8,85.6S0,66.4,0,42.8S19.2,0,42.8,0z"
					/>
				<path id="Line_x5F_70" class="st1" d="M60.7,25.5l-35,35"/>
				<path id="Ellipse_x5F_30" class="st1" d="M31,23.2c4.4,0,8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S23,35.7,23,31.2S26.6,23.2,31,23.2z"/>
				<path id="Ellipse_x5F_31" class="st1" d="M54.5,46.3c4.4,0,8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1s-8.1-3.6-8.1-8.1
					S50.1,46.3,54.5,46.3z"/>
			</g>
		</g>
		</svg>
		`;
		let icon_sale = document.getElementById('icon_category-sale');
		(()=>{
			icon_sale.onmouseleave = function(){
				window.gsap.to('#SaleGroup',0.3,{y:0})
			}
				let x = 0;
				window.gsap.set('#sale_icon_shine, #sale_icon_shine-2, #sale_icon_shine-3',{ scale:0, transformOrigin: "center"})

			icon_sale.onmouseover = function(){
				window.gsap.to('#SaleGroup',0.3,{y:-10})
						x+=1;

						if (x == 1){
					let setDashArrayOfThePath=(PathId)=>{
						var P_DPath = document.querySelector(PathId);
						var P_DPathLenth = P_DPath.getTotalLength();
						window.gsap.set(P_DPath,{strokeDasharray:P_DPathLenth,strokeDashoffset: P_DPathLenth});
						}
						setDashArrayOfThePath('#Ellipse_x5F_29');
						setDashArrayOfThePath('#Ellipse_x5F_30');
						setDashArrayOfThePath('#Ellipse_x5F_31');
						setDashArrayOfThePath('#Line_x5F_70');
						window.gsap.to('#Ellipse_x5F_29',.5,{ strokeDashoffset: 0},0.5)
						window.gsap.to('#Ellipse_x5F_30',.5,{ strokeDashoffset: 0},0.5)
						window.gsap.to('#Ellipse_x5F_31',.5,{ strokeDashoffset: 0},0.5)
						window.gsap.to('#Line_x5F_70',.5,{ strokeDashoffset: 0},0.5)
								let tl = new window.TimelineLite({repeat:0});
								tl.to('#sale_icon_shine, #sale_icon_shine-2, #sale_icon_shine-3',0.3,{ scale: 1, stagger:{each:0.1,repeat:3,repeatDelay:0.3}})
								tl.to('#sale_icon_shine, #sale_icon_shine-2, #sale_icon_shine-3',0.3,{ scale: 0, stagger:{each:0.1,repeat:3,repeatDelay:0.3}},0.3)
								tl.timeScale(2)
					setTimeout(function(){
										x = 0;
								},1000);

						}
				}

		})();
	}, [])

	return (
		<div id="saleIcon"></div>
	)
};
export default SaleCategory;
