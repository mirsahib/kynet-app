import config from '../../../../config/config'

export interface IPublishField{
    catagory: string;
    location: string;
    title: string;
    description: string;
    image:any
}

const publish = async(data:IPublishField)=>{
    try {
        console.log('data',data)
        const formData = new FormData();
        let name:keyof typeof data
        for(name in data){
            if(name==='image'){
                formData.append(name,data[name][0])
            }
            formData.append(name,data[name])
        }
        let response = await fetch(`${config.host}/api/ads`,{
            method: 'POST',
            body:formData
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    publish
}