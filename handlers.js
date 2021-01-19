import { convert } from './lib.js';
import { formatCurreny } from './utils.js';
import { fromInput, fromSelect, toSelect, toEl } from './elements.js';

export async function handleInput(e) {
    const rawAmount = await convert(
      fromInput.value, 
      fromSelect.value, 
      toSelect.value
      );
    
      toEl.textContent = formatCurreny(rawAmount, toSelect.value);
    }