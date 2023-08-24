/**
	Percentage
	Display la repartition d'items, organisés par themes et calcul le pourcentage sur le total
	Version 1.0 </br>
	@module Percentage
	@main Percentage
**/

/* global Main*/

(function(win, doc) {
    /**
        Percentage Class <br/>
        Example Percentage: <div class="module_percentage"></div>
        @class Percentage
        @constructor
    **/
     function Percentage (options) {
    
        var that = {},
            self = {};
        self.options = {
            /**
                It is the parent div where the content will be created. <br/>
                String (NOT or DOM Object are accepted.)
                @property wrapper
                @type {String } //or DOM Object}
            **/
            wrapperId: 'mod_perc_kwljn',
    
            /**
              Name of the module wrapper
              @property moduleWrapper
              @type {String}
            **/
              moduleWrapperId : 'mperc_kjn',

            /**
              Url of json
              @property jsonUrl
              @type {String}
              @default 
            **/
              jsonUrl : './md_perc_data.json',

            /**
              Default theme
              @property percentageItem
              @type {String}
            **/
              percentageTheme : 'Theme',

            /**
               Default description
              @property percentageItem
              @type {String}
            **/
              percentageDescription : 'Description',
    
            /**
                 Call this function when the percentage is initiated
                @property callBackInitFunction
                @type {Function}
            **/
             callBackInitFunction: null,

            /**
             wrapperWidth
              @property wrapperWidth
              @type {string}
              @default auto
             **/
              wrapperWidth : 'auto',

             /**
             IsAnimated
                @property IsAnimated
                @type {boolean}
                @default false
             **/
            IsAnimated : false,   


            /**
             Match media desktop
             @property matchMediaDestop
             @type {string}
             **/
              matchMediaDestop : '(min-width: 1200px)',
    
            /**
             Match media tablet
             @property matchMediaTablet
             @type {string}
             **/
              matchMediaTablet : '(min-width: 768px)',
          };
    
        self.priv= {
          
        };
        for (var i in options) { self.options[i] = options[i]; }
        for (var i in  self.options) { self.priv[i] = self.options[i]; }
    
    
      /** PUBLIC METHODS **/
    
     /**
       Initializing Carrousel Class
       @private
       @method __init
       @param {String or DOM Object} el
       @param {Array} options
       @return {null}
     **/
       that.init = function() {
            // why déjà ??
            self.priv2 ={
                 wrapper : document.getElementByID('wrapperId'),
                 moduleWrapper : document.getElementByID('moduleWrapperId'),
                // mqd : window.matchMedia(self.priv.matchMediaDestop),
                // mqt : window.matchMedia(self.priv.matchMediaTablet),
                 jsonUrl : $('.'+self.priv['jsonUrl']),
             };
             for (var i in  self.priv2) { self.priv[i] = self.priv2[i]; }

             //..

           let data=  __load(self.priv.jsonUrl);
           let list = __createItemList(data.items);
           __AppendList(list);
    
            //  __handleMatchMediaDesktop(self.priv.mqd);
            //  __handleMatchMediaTablet(self.priv.mqt);
    
    
         };
    
    
       /** PRIVATE METHODS **/
    

            /**
           updatePositionMarker
          @method  __updatePositionMarker
          @param {array} 
          @param {String} 
          @return {null}
        **/
          function __updatePositionMarker () {
          
          };   

        /**
           updateItemList
          @method  __updateItemList
          @param {array} 
          @return {String}
        **/
          function __createItemList (items) {
            let list ="<ul>"
            for (let i = 0; i < items.length; i++) {
              list += "<li>"+ items.itemName+"</li>"
            }
            list+="</ul>"
            return list;
          }; 

        /**
          AppendList
          @method  __AppendList
          @param {string} 
        **/
          function __AppendList(list) {
            self.priv.moduleWrapper.innerHTML = list ;
          }; 

        /**
           animatePositionMarker
          @method  __animatePositionMarker
          @param {array} 
          @param {String} 
          @return {null}
        **/
         function __animatePositionMarker () {
          
         };   
    
    
        /**
          Load
          @method  __load
          @param {string} jsonfilename
          @return {json}
        **/
         function __load(url) {
            var data = {
              "theme": "web techno",
              "description": "repartition des techno par boulot en freelance",
              "hideItemList": [],
              "active": true,
              "items": [
                {
                  "itemName": "site perso",
                  "itemDesc": "wordpress",
                  "itemData":  ["data1", "data2", "data3"],
                  "hide":false
                },
                {
                  "itemName": "Made in Shoreditch",
                  "itemDesc": "wordpress",
                  "itemData":  ["data1", "data2", "data3"],
                  "hide":false
                },
                {
                  "itemName": "imbriqués",
                  "itemDesc": "HTML/CSS/JS",
                  "itemData":  ["data1", "data2", "data3"],
                  "hide":false
                },
                {
                  "itemName": "Nature environnment",
                  "itemDesc": "joomla",
                  "itemData":  ["data1", "data2", "data3"],
                  "hide":true
                }
              ]
            }  
            return data;         
         }
    
    
    
         /**
           handleMatchMediaDesktop
           @method  __handleMatchMediaDesktop
           @param {Object} mql
           @return {null}
         **/
      //  function __handleMatchMediaDesktop(mql){
      //    if(mql.matches)
      //       self.priv.desktop = true;
      //   else
      //       self.priv.desktop = false;
    
      //   if(self.priv.responsiveImages){
      //       getRespImageSuffix();
      //   }
      //  }
    
       /**
         handleMatchMediaTablet
         @method  __handleMatchMediaTablet
         @param {Object} mql
         @return {null}
       **/
      //  function __handleMatchMediaTablet(mql){
      //    if(mql.matches)
      //           self.priv.tablet = true;
      //    else
      //           self.priv.tablet = false;
    
      //     if(self.priv.responsiveImages){
      //         __getRespImageSuffix();
      //     }
      //  }
    
       return that;
    };
    


    
    window.onload = function () {
      main =  new Percentage({ callBackInitFunction : function(){console.log('tested');}});
      main.init();
    }


  });