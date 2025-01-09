import axios from "axios"
import { NextResponse } from "next/server";

const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export default fetcher;