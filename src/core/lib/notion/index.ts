import {PageProperties} from "~/core/types";
import {NotionAPI} from "notion-client";
import {estimatePageReadTime, formatDate, getPageProperty} from "notion-utils";
import {defaultMapImageUrl} from "react-notion-x";

export const notion = new NotionAPI({
    activeUser: process.env.USER_ID,
    authToken: process.env.TOKEN
});

export const getDatabase = async (): Promise<PageProperties[]> => {
    const posts: PageProperties[] = [];
    const page = await notion.getPage(process.env.NOTION_DB_ID ?? "");
    Object.keys(page.block).map((id) => {
        if (page.block[id].value.type === 'page')
            posts.push({
                id,
                title: getPageProperty("title", page.block[id].value, page),
                tags: getPageProperty("tags", page.block[id].value, page),
                description: getPageProperty("description", page.block[id].value, page),
                slug: getPageProperty("slug", page.block[id].value, page),
                created: formatDate(getPageProperty("created", page.block[id].value, page)),
                readTime: Math.ceil(estimatePageReadTime(page.block[id].value, page).totalReadTimeInMinutes),
                cover: defaultMapImageUrl(page.block[id].value.format.page_cover, page.block[id].value) ?? page.block[id].value.format.page_cover,
            });
    });
    return posts;
};