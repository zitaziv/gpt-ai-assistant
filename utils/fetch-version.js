import axios from 'axios';
import fs from 'fs';

/**
 * @returns {Promise<string>}
 */
const fetchVersion = async () => {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/memochou1993/gpt-ai-assistant/main/package.json',
      { proxy: false },
    );
    return data.version;
  } catch (err) {
    // Fall back to local version when the request fails (e.g. offline)
    return JSON.parse(fs.readFileSync('package.json')).version;
  }
};

export default fetchVersion;
