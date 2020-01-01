import ajax from "../lib/request.js"
class index extends ajax {
	getIndexData() {
		return ajax.get("/index_category/data")
	}
	
} 

export {index}