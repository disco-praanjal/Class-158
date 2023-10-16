AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"} 
    },
    init:function(){
        this.handleMouseEnterEvent()
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal","budapest","new-york-city","eiffel-tower"]
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener",{selectedItemId:id})
            placeContainer.setAttribute("material",{color:"#d76b30",opacitiy:1})
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    }
})