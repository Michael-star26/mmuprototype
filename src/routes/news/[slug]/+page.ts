import {news} from '$lib/data/news';
import {error} from '@sveltejs/kit'
import type { PageLoad } from './$types';

export const load:PageLoad= ({params})=>{
    let article=news.find((n)=>n.slug===params.slug)

    if(!article){
        throw error(404,{
            message:"Page is Unavailable at the moment"
        })
    }

    return {article}
}