class App {

    static start() {

        App.loadClasses().done(() => {
            Utils.init();
            $(document).ready(() => {
                App.browse();
            });
        })

        window.onpopstate = () => {
            App.browse();
        }
        $('.nav-link').on('click', (evt) => {
            let btn = $(evt.target).closest('.navbar').find('.navbar-toggler').not('.collapsed');
            btn ? btn.click() : null;
        })

    }

    static browse() {
        console.clear();
        let hash = (window.location.hash || "#accueil").substring(1);
        App.test();
        // $('#main').hide().html(hash).fadeIn();
    }

    static classes = [
        "Utils", "Rest", "model/Model", "model/Product", "model/Category"
    ];
    static loadClasses() {
        let deferred = $.Deferred();
        /* TODO */
        return deferred.promise()
    }
    static getScript(scriptUrl) {
        let deferred = $.Deferred();
        /* TODO */
        return deferred.promise();
    }

    static test() {
    //     Tests de Product
    
    // Rest.get({
    //     table:"category",
    //     id: 3,
    //     where: "active = false",
    // }).done((resp) => {
    //     // let don = resp.tryJsonParse();
        
    //     /* TODO */
    //     $('#main').hide().html(resp).fadeIn();
    // })
    // Rest.post({
    //     table:"product",
    //     fields:{
    //         title:"AZE",
    //         description:"ibra"
    //     }
    
    // }).done((resp) => {
    //     // let don = resp.tryJsonParse();
        
    //     /* TODO */
    //     $('#main').hide().html(resp).fadeIn();
    // })
    // Rest.put({
    //     table:"product",
    //     id:101,
    //     fields:{
    //         title:"buyoya",
    //         description:"ibra"
    //     }
    
    // }).done((resp) => {
    //     // let don = resp.tryJsonParse();
        
    //     /* TODO */
    //     $('#main').hide().html(resp).fadeIn();
    // })
    Rest.delete({
        table:"product",
        id:101,
        fields:{
            title:"buyoya",
            description:"ibra"
        }
    
    }).done((resp) => {
        // let don = resp.tryJsonParse();
        
        /* TODO */
        $('#main').hide().html(resp).fadeIn();
    })
    //     /* TODO */
    //     //Tests de Category
    //     /* TODO */
    //     Rest.get({
    //         table: "product",
    //         // id: 1,
    //         // where: "active = false",
    //     }).done((resp) => {
    //         console.log(resp);
    //         /* TODO */
    //         $('#main').hide().html(resp).fadeIn();
    //     })
        
    }

        // $('#main').hide().html("TEST").fadeIn();
    }

