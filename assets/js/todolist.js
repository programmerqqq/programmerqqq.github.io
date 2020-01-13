
				Vue.component("todo-item",{
				 props:["index","content"],
				 template:'<li class="todo" v-on:click="handleClick">{{content}}</li>',
				 
				 methods:{
					 handleClick: function (){
						 this.$emit('delete',this.index);
					 }  
				 }
		 
				})
				new Vue({
					el:"#root",
					data:{
						inputValue:'',
						list:[]
					 },
				 methods:{
					 addToDo: function (){
						 if(this.inputValue.length>0)
						 this.list.push(this.inputValue);
						 this.inputValue='';
					 },
					 handleDelete: function(index){
						 this.list.splice(index,1);
					 
		 
					 }    
					 
				 }
				})
		 
	
         