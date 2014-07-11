/*
 * Copyright (C) 2013 HueiTan
 *
 * neo4jquery is free software: you can redistribute it and/or modify 
 * it under the terms of the GNU General Public License as published by 
 * the Free Software Foundation, either version 3 of the License, or 
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * HueiTan, hereby disclaims all copyright
 *
 *
 *
 * This is an example of jquery plug-in
 * In this neo4jquery plugin, i will follow the guide-pattern below
 * inspired by jaceju, thanks!
 *
 * (function($){
 *
 *      //some explanations of this function
 *      //define global variables here
 *       $.fn.neo4jquery = function(options){
 *
 *               //define local variables here
 *               var change = $(this)
 *
 *               //default options
 *               var _defaultOption = {
 *               callback : function(){
 *               alert(this.id);
 *               }
 *               };//end of default options
 *       
 *              //extend of options
 *              var _options = $.extend(_defaultOption,options);
 *      
 *              //return
 *              return this.each(function(){
 *              $(this).click(_options.callback);
 *              });//end of return
 *
 *       };//end of function neo4jquery
 *       
 * //3 blank here for next function
 *
 * })(jQuery);
 */
 


 (function($){
 
 /*
  * Setting up - constructor/initialization of neo4jquery
  * all configurations of neo4jquery setting here
  * $().neo4jquery() must be run before using neo4jquery function
  *
  * options:
  * host : this is the hostname of using neo4jquery
  */
        var host="http://localhost:7474/db/data";//this is the hostname in your host, default http://localhost:7474/db/data
        $.fn.neo4jquery = function(options){
                
                //default options
                var _defaultOption = {
                host : "http4://localhost:7474/db/data"
                };//end of default options
                
                //extend of options
                var _options = $.extend(_defaultOption,options);
                
                //return
                host=_options.host;
                //end of return
                
        };//end of function setHost
        
        
        
 /*
  * Sending a query with Cypher Query Language
  * This cypher function can assign to one selector $( 'selector' ) to get the return value 
  *
  * options:
  * query : the cypher language
  * dataType :  (xml, json, script, text, html) with default json
  *
  * usage:(not recommended for return value)
  * create node with or w/o properties
  * delete node
  * create relationship with or w/o properties
  */
        $.fn.cypher = function(query,options){
                
                //variable settings
                var output = $(this);
                query={"query": query };

                //default options
                var _defaultOption = {
                dataType : "json",
                callback :function(){
                $.post(host+"/cypher",query,function(data, textStatus, jqXHR){
                output.html(data.data[0][0].data.placeName);
                },_defaultOption.dataType).error(function(){alert("error cypher: "+query.query);});
                }
                
                };//end of default options

                //extend of options
                var _options = $.extend(_defaultOption,options);
                
                //return
                $(document).ready(_options.callback);
                //end of return
                
        };//end of function cypher
        
        
        
 /*
  * Creating a new node with options propeties,index
  *
  * options:
  * properties : set the properties of a new node
  * index : set the node in an index
  * index_key : set the index key
  * index_value : set the index value
  */
        $.fn.createNode = function(options){
                
                //default options
                var _defaultOption = {
                properties : {},
                index: null,
                index_key: null,
                index_value: null,
                callback : function(){
                $.post(host+"/node",_defaultOption.properties,function(data,textStatus,jqXHR){
                if(_defaultOption.index==null){
                //list is null, we don't need to list node
                }
                else 
                {
                $.ajax({
    		type:"POST", 
			url: "http://localhost:7474/db/data/index/node/"+_defaultOption.index, 
			dataType: "json", 
			contentType: "application/json",
			data: JSON.stringify({"key":_defaultOption.index_key,"value":_defaultOption.index_value,"uri":data.self}), 
			success: function(){},
			error: function(){ alert("error creating node list")}
		        });
                }//end of if check list null
                },"json");
                }
                };//end of default options
                
                //extend of options
                var _options = $.extend(_defaultOption,options);
                
                //return
                $(document).ready(_options.callback);
                //end of return
        };//end of function create 
                
        
        
        
 })(jQuery);
 //This is the end of neo4jquery.js
 
 
 
 
 