    //
    // Statusbar Text
    //
    nrStatusBar.register({
        name: "tab",
        type: "Tab",
        description: "The widget renders a Tab",
        
        create : function  (id,options) {
            var sel = id + 'Tab';
    
            if ($('#' + sel).length === 0 && $('#nrStatusBar').length !== 0 ) {
                nrStatusBar.log( "[create] Text " + sel + " with options: " + JSON.stringify(options));

                var mdBStr = $(nrStatusBar.getButtonTag(sel, 
                    '<div'
                    +'ui-masonry=""'
                    +'ng-show="main.selectedTab.header"'
                    +'id="sel"'
                    +'class="masonry-container"'
                    +'aria-hidden="false"'
                    +'style="">'
                    +'</div>'
                ))

                $('#nrStatusBar').append(mdBStr);
                        
                return({type:'Text', id:id, options:options, tag:mdBStr});
            }
        },

update : function(e,payload) {
    
 //   $(sel).html(text);
    //$(sel).css({"color": textcolor, "display":"inline"})
}
});