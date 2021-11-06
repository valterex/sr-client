import axios from "axios";
import { Match, Tournament } from "../types";

export class Api {
  baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

  async getTournaments(): Promise<Array<Tournament>> {
    const response = await axios.get(`${this.baseURL}/tournaments`);
    return response.data;
  }

  async getMatches(id: string): Promise<Array<Match>> {
    const response = await axios.get(`${this.baseURL}/matches/${id}`);
    return response.data;
  }
}
