// Garden Gnome Software - Skin
// Object2VR 3.1.9/10783
// Filename: Forte1.ggsk
// Generated Сб 18. фев 23:55:26 2023

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._button_fullscreen=document.createElement('div');
		this._button_fullscreen.ggId="button_fullscreen";
		this._button_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fullscreen.ggVisible=true;
		this._button_fullscreen.className='ggskin ggskin_container';
		this._button_fullscreen.ggType='container';
		this._button_fullscreen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(50 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(15 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  15px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_fullscreen.setAttribute('style',hs);
		this._button_fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._button_image_normalscreen=document.createElement('div');
		this._button_image_normalscreen.ggId="button_image_normalscreen";
		this._button_image_normalscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_normalscreen.ggVisible=false;
		this._button_image_normalscreen.className='ggskin ggskin_svg';
		this._button_image_normalscreen.ggType='svg';
		this._button_image_normalscreen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_image_normalscreen.setAttribute('style',hs);
		this._button_image_normalscreen__img=document.createElement('img');
		this._button_image_normalscreen__img.className='ggskin ggskin_svg';
		this._button_image_normalscreen__img.setAttribute('src',basePath + 'output/button_image_normalscreen.svg');
		this._button_image_normalscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._button_image_normalscreen__img['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__img);
		this._button_image_normalscreen.onmouseover=function () {
			me._button_image_normalscreen__img.src=basePath + 'output/button_image_normalscreen__o.svg';
		}
		this._button_image_normalscreen.onmouseout=function () {
			me._button_image_normalscreen__img.src=basePath + 'output/button_image_normalscreen.svg';
		}
		this._button_fullscreen.appendChild(this._button_image_normalscreen);
		this._button_image_fullscreen=document.createElement('div');
		this._button_image_fullscreen.ggId="button_image_fullscreen";
		this._button_image_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_fullscreen.ggVisible=true;
		this._button_image_fullscreen.className='ggskin ggskin_svg';
		this._button_image_fullscreen.ggType='svg';
		this._button_image_fullscreen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_image_fullscreen.setAttribute('style',hs);
		this._button_image_fullscreen__img=document.createElement('img');
		this._button_image_fullscreen__img.className='ggskin ggskin_svg';
		this._button_image_fullscreen__img.setAttribute('src',basePath + 'output/button_image_fullscreen.svg');
		this._button_image_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._button_image_fullscreen__img['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__img);
		this._button_image_fullscreen.onmouseover=function () {
			me._button_image_fullscreen__img.src=basePath + 'output/button_image_fullscreen__o.svg';
		}
		this._button_image_fullscreen.onmouseout=function () {
			me._button_image_fullscreen__img.src=basePath + 'output/button_image_fullscreen.svg';
		}
		this._button_fullscreen.appendChild(this._button_image_fullscreen);
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		this._tt_fullscreen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-20 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -20px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen.ggTextDiv.innerHTML="";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._button_fullscreen.appendChild(this._tt_fullscreen);
		this.divSkin.appendChild(this._button_fullscreen);
		this._gyro=document.createElement('div');
		this._gyro.ggId="gyro";
		this._gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro.ggVisible=true;
		this._gyro.className='ggskin ggskin_container';
		this._gyro.ggType='container';
		this._gyro.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(15 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  15px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._gyro.setAttribute('style',hs);
		this._gyro_on=document.createElement('div');
		this._gyro_on.ggId="gyro_on";
		this._gyro_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_on.ggVisible=true;
		this._gyro_on.className='ggskin ggskin_svg';
		this._gyro_on.ggType='svg';
		this._gyro_on.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._gyro_on.setAttribute('style',hs);
		this._gyro_on__img=document.createElement('img');
		this._gyro_on__img.className='ggskin ggskin_svg';
		this._gyro_on__img.setAttribute('src',basePath + 'output/gyro_on.svg');
		this._gyro_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._gyro_on__img['ondragstart']=function() { return false; };
		this._gyro_on.appendChild(this._gyro_on__img);
		this._gyro_on.onmouseover=function () {
			me._gyro_on__img.src=basePath + 'output/gyro_on__o.svg';
		}
		this._gyro_on.onmouseout=function () {
			me._gyro_on__img.src=basePath + 'output/gyro_on.svg';
		}
		this._gyro.appendChild(this._gyro_on);
		this._gyro_off=document.createElement('div');
		this._gyro_off.ggId="gyro_off";
		this._gyro_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_off.ggVisible=true;
		this._gyro_off.className='ggskin ggskin_svg';
		this._gyro_off.ggType='svg';
		this._gyro_off.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._gyro_off.setAttribute('style',hs);
		this._gyro_off__img=document.createElement('img');
		this._gyro_off__img.className='ggskin ggskin_svg';
		this._gyro_off__img.setAttribute('src',basePath + 'output/gyro_off.svg');
		this._gyro_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._gyro_off__img['ondragstart']=function() { return false; };
		this._gyro_off.appendChild(this._gyro_off__img);
		this._gyro_off.onmouseover=function () {
			me._gyro_off__img.src=basePath + 'output/gyro_off__o.svg';
		}
		this._gyro_off.onmouseout=function () {
			me._gyro_off__img.src=basePath + 'output/gyro_off.svg';
		}
		this._gyro.appendChild(this._gyro_off);
		this._tt_gyro=document.createElement('div');
		this._tt_gyro__text=document.createElement('div');
		this._tt_gyro.className='ggskin ggskin_textdiv';
		this._tt_gyro.ggTextDiv=this._tt_gyro__text;
		this._tt_gyro.ggId="tt_gyro";
		this._tt_gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_gyro.ggVisible=false;
		this._tt_gyro.className='ggskin ggskin_text';
		this._tt_gyro.ggType='text';
		this._tt_gyro.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-20 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -20px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_gyro.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_gyro__text.setAttribute('style',hs);
		this._tt_gyro.ggTextDiv.innerHTML="";
		this._tt_gyro.appendChild(this._tt_gyro__text);
		this._gyro.appendChild(this._tt_gyro);
		this.divSkin.appendChild(this._gyro);
		this._map=document.createElement('div');
		this._map.ggId="Map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_container';
		this._map.ggType='container';
		this._map.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-50 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(15 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  15px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map.setAttribute('style',hs);
		this._show_controller_button=document.createElement('div');
		this._show_controller_button.ggId="show_controller_button";
		this._show_controller_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._show_controller_button.ggVisible=true;
		this._show_controller_button.className='ggskin ggskin_svg';
		this._show_controller_button.ggType='svg';
		this._show_controller_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 100%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._show_controller_button.setAttribute('style',hs);
		this._show_controller_button__img=document.createElement('img');
		this._show_controller_button__img.className='ggskin ggskin_svg';
		this._show_controller_button__img.setAttribute('src',basePath + 'output/show_controller_button.svg');
		this._show_controller_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._show_controller_button__img['ondragstart']=function() { return false; };
		this._show_controller_button.appendChild(this._show_controller_button__img);
		this._show_controller_button.onmouseover=function () {
			me._show_controller_button__img.src=basePath + 'output/show_controller_button__o.svg';
		}
		this._show_controller_button.onmouseout=function () {
			me._show_controller_button__img.src=basePath + 'output/show_controller_button.svg';
		}
		this._map.appendChild(this._show_controller_button);
		this._tt_map=document.createElement('div');
		this._tt_map__text=document.createElement('div');
		this._tt_map.className='ggskin ggskin_textdiv';
		this._tt_map.ggTextDiv=this._tt_map__text;
		this._tt_map.ggId="tt_map";
		this._tt_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_map.ggVisible=false;
		this._tt_map.className='ggskin ggskin_text';
		this._tt_map.ggType='text';
		this._tt_map.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(4 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-20 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  -20px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_map.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_map__text.setAttribute('style',hs);
		this._tt_map.ggTextDiv.innerHTML="";
		this._tt_map.appendChild(this._tt_map__text);
		this._map.appendChild(this._tt_map);
		this._map_blue_pin=document.createElement('div');
		this._map_blue_pin.ggId="map_blue_pin";
		this._map_blue_pin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_blue_pin.ggVisible=true;
		this._map_blue_pin.className='ggskin ggskin_svg';
		this._map_blue_pin.ggType='svg';
		this._map_blue_pin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-154 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(389 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -154px;';
		hs+='top:  389px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_blue_pin.setAttribute('style',hs);
		this._map_blue_pin__img=document.createElement('img');
		this._map_blue_pin__img.className='ggskin ggskin_svg';
		this._map_blue_pin__img.setAttribute('src',basePath + 'output/map_blue_pin.svg');
		this._map_blue_pin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._map_blue_pin__img['ondragstart']=function() { return false; };
		this._map_blue_pin.appendChild(this._map_blue_pin__img);
		this._map_blue_pin.onclick=function () {
			me.player.openNext("$(hu)","");
		}
		this._map.appendChild(this._map_blue_pin);
		this.divSkin.appendChild(this._map);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className='ggskin ggskin_text';
		this._text_1.ggType='text';
		this._text_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(26 + w) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(6 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (201-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 26px;';
		hs+='top:  6px;';
		hs+='width: 201px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._text_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1.ggTextDiv.innerHTML="Created by ARCHIGRAPH";
		this._text_1.appendChild(this._text_1__text);
		this.divSkin.appendChild(this._text_1);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	this.addSkin();
};