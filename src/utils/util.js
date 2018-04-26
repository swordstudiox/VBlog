export default {
	cutStr(str,len){
		try{
			if(str.length>len){
				return str.substring(0,len)+'...'
			}
			return str
		}catch(e){
			return ""
		}
	},
	verifyEmail(str){
		if(str==null||str==undefined){
			return false
		}
		let reg = /^[0-9A-Za-z_]+@[0-9A-Za-z]+\.[A-Za-z]+/
		return reg.test(str)
	},
	//yyyy-MM-ddThh-mm-ss.*
	utcToLocal(time){
		 let arr = time.split(/[^0-9]/)
		 let worldDate = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5])
		 let localDate = new Date(worldDate.getTime()+8*60*60*1000)
		 return localDate.getFullYear()+"-"+(localDate.getMonth()+1)+"-"+localDate.getDate()+" "+localDate.getHours()+":"+localDate.getMinutes()+":"+localDate.getSeconds()
	},
	guid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
			return v.toString(16)
		})
	},
	//s<=r<e
	randomInt(s,e){
		let d=e-s
		if(d<0){
			return s
		}
		let r = Math.random()*d + s
		r = parseInt(r, 10)
		return r
	},
	fullScreen() {   
		var element= document.documentElement
		if (window.ActiveXObject){
			var WsShell = new ActiveXObject('WScript.Shell')
			WsShell.SendKeys('{F11}') 
		}else if(element.requestFullScreen){
			element.requestFullScreen()
		}else if(element.msRequestFullscreen){
			element.msRequestFullscreen()
		}else if(element.webkitRequestFullScreen){
			element.webkitRequestFullScreen()
		}else if(element.mozRequestFullScreen){
			element.mozRequestFullScreen()
		}    
	},
	fullExit(){  
		var element= document.documentElement
		if (window.ActiveXObject){
			var WsShell = new ActiveXObject('WScript.Shell')
			WsShell.SendKeys('{F11}')
		}else if(element.requestFullScreen){
			document.exitFullscreen()
		}else if(element.msRequestFullscreen){
			document.msExitFullscreen()
		}else if(element.webkitRequestFullScreen){
			document.webkitCancelFullScreen()
		}else if(element.mozRequestFullScreen){
			document.mozCancelFullScreen()
		}   
	}  
}