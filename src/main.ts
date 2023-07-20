import * as ds from "@devicescript/core"

import { font8, scaledFont } from "@devicescript/graphics"
import { PimoroniBadger2040W } from "."

// not testing in sim
if (ds.isSimulator()) ds.restart()

const board = new PimoroniBadger2040W()
const disp = await board.startDisplay()
const f = scaledFont(font8(), 3)
disp.image.print("Hello world!", 10, 10, 1, f)
await disp.show()
