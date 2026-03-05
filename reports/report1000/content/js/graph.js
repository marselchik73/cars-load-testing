/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 116.0, "minX": 0.0, "maxY": 3636.0, "series": [{"data": [[0.0, 116.0], [0.1, 119.0], [0.2, 119.0], [0.3, 119.0], [0.4, 119.0], [0.5, 120.0], [0.6, 120.0], [0.7, 121.0], [0.8, 123.0], [0.9, 123.0], [1.0, 124.0], [1.1, 124.0], [1.2, 124.0], [1.3, 124.0], [1.4, 125.0], [1.5, 125.0], [1.6, 125.0], [1.7, 125.0], [1.8, 125.0], [1.9, 125.0], [2.0, 126.0], [2.1, 126.0], [2.2, 126.0], [2.3, 126.0], [2.4, 126.0], [2.5, 126.0], [2.6, 127.0], [2.7, 127.0], [2.8, 127.0], [2.9, 127.0], [3.0, 127.0], [3.1, 127.0], [3.2, 127.0], [3.3, 127.0], [3.4, 127.0], [3.5, 128.0], [3.6, 128.0], [3.7, 128.0], [3.8, 128.0], [3.9, 128.0], [4.0, 128.0], [4.1, 128.0], [4.2, 128.0], [4.3, 129.0], [4.4, 129.0], [4.5, 129.0], [4.6, 129.0], [4.7, 129.0], [4.8, 129.0], [4.9, 129.0], [5.0, 129.0], [5.1, 129.0], [5.2, 129.0], [5.3, 129.0], [5.4, 129.0], [5.5, 130.0], [5.6, 130.0], [5.7, 130.0], [5.8, 130.0], [5.9, 130.0], [6.0, 130.0], [6.1, 130.0], [6.2, 130.0], [6.3, 130.0], [6.4, 130.0], [6.5, 130.0], [6.6, 130.0], [6.7, 130.0], [6.8, 130.0], [6.9, 130.0], [7.0, 130.0], [7.1, 130.0], [7.2, 130.0], [7.3, 130.0], [7.4, 131.0], [7.5, 131.0], [7.6, 131.0], [7.7, 131.0], [7.8, 131.0], [7.9, 131.0], [8.0, 131.0], [8.1, 131.0], [8.2, 131.0], [8.3, 131.0], [8.4, 131.0], [8.5, 131.0], [8.6, 131.0], [8.7, 131.0], [8.8, 131.0], [8.9, 131.0], [9.0, 131.0], [9.1, 132.0], [9.2, 132.0], [9.3, 132.0], [9.4, 132.0], [9.5, 132.0], [9.6, 132.0], [9.7, 132.0], [9.8, 132.0], [9.9, 132.0], [10.0, 132.0], [10.1, 132.0], [10.2, 132.0], [10.3, 132.0], [10.4, 132.0], [10.5, 133.0], [10.6, 133.0], [10.7, 133.0], [10.8, 133.0], [10.9, 133.0], [11.0, 133.0], [11.1, 133.0], [11.2, 133.0], [11.3, 133.0], [11.4, 133.0], [11.5, 133.0], [11.6, 133.0], [11.7, 134.0], [11.8, 134.0], [11.9, 134.0], [12.0, 134.0], [12.1, 134.0], [12.2, 134.0], [12.3, 134.0], [12.4, 134.0], [12.5, 134.0], [12.6, 134.0], [12.7, 134.0], [12.8, 134.0], [12.9, 134.0], [13.0, 134.0], [13.1, 134.0], [13.2, 134.0], [13.3, 134.0], [13.4, 135.0], [13.5, 135.0], [13.6, 135.0], [13.7, 135.0], [13.8, 135.0], [13.9, 135.0], [14.0, 135.0], [14.1, 135.0], [14.2, 135.0], [14.3, 135.0], [14.4, 135.0], [14.5, 135.0], [14.6, 135.0], [14.7, 135.0], [14.8, 136.0], [14.9, 136.0], [15.0, 136.0], [15.1, 136.0], [15.2, 136.0], [15.3, 136.0], [15.4, 136.0], [15.5, 136.0], [15.6, 136.0], [15.7, 136.0], [15.8, 136.0], [15.9, 136.0], [16.0, 136.0], [16.1, 136.0], [16.2, 136.0], [16.3, 136.0], [16.4, 136.0], [16.5, 136.0], [16.6, 136.0], [16.7, 136.0], [16.8, 137.0], [16.9, 137.0], [17.0, 137.0], [17.1, 137.0], [17.2, 137.0], [17.3, 137.0], [17.4, 137.0], [17.5, 137.0], [17.6, 137.0], [17.7, 137.0], [17.8, 137.0], [17.9, 137.0], [18.0, 137.0], [18.1, 137.0], [18.2, 137.0], [18.3, 137.0], [18.4, 137.0], [18.5, 137.0], [18.6, 137.0], [18.7, 138.0], [18.8, 138.0], [18.9, 138.0], [19.0, 138.0], [19.1, 138.0], [19.2, 138.0], [19.3, 138.0], [19.4, 138.0], [19.5, 138.0], [19.6, 138.0], [19.7, 138.0], [19.8, 138.0], [19.9, 138.0], [20.0, 139.0], [20.1, 139.0], [20.2, 139.0], [20.3, 139.0], [20.4, 139.0], [20.5, 139.0], [20.6, 139.0], [20.7, 139.0], [20.8, 139.0], [20.9, 139.0], [21.0, 139.0], [21.1, 139.0], [21.2, 139.0], [21.3, 139.0], [21.4, 139.0], [21.5, 139.0], [21.6, 139.0], [21.7, 139.0], [21.8, 140.0], [21.9, 140.0], [22.0, 140.0], [22.1, 140.0], [22.2, 140.0], [22.3, 140.0], [22.4, 140.0], [22.5, 140.0], [22.6, 140.0], [22.7, 140.0], [22.8, 140.0], [22.9, 140.0], [23.0, 140.0], [23.1, 140.0], [23.2, 140.0], [23.3, 140.0], [23.4, 140.0], [23.5, 140.0], [23.6, 140.0], [23.7, 140.0], [23.8, 140.0], [23.9, 140.0], [24.0, 140.0], [24.1, 140.0], [24.2, 140.0], [24.3, 140.0], [24.4, 141.0], [24.5, 141.0], [24.6, 141.0], [24.7, 141.0], [24.8, 141.0], [24.9, 141.0], [25.0, 141.0], [25.1, 141.0], [25.2, 141.0], [25.3, 141.0], [25.4, 141.0], [25.5, 141.0], [25.6, 141.0], [25.7, 141.0], [25.8, 141.0], [25.9, 141.0], [26.0, 141.0], [26.1, 141.0], [26.2, 141.0], [26.3, 142.0], [26.4, 142.0], [26.5, 142.0], [26.6, 142.0], [26.7, 142.0], [26.8, 142.0], [26.9, 142.0], [27.0, 142.0], [27.1, 142.0], [27.2, 142.0], [27.3, 142.0], [27.4, 142.0], [27.5, 142.0], [27.6, 142.0], [27.7, 142.0], [27.8, 142.0], [27.9, 142.0], [28.0, 142.0], [28.1, 143.0], [28.2, 143.0], [28.3, 143.0], [28.4, 143.0], [28.5, 143.0], [28.6, 143.0], [28.7, 143.0], [28.8, 143.0], [28.9, 143.0], [29.0, 143.0], [29.1, 143.0], [29.2, 143.0], [29.3, 143.0], [29.4, 143.0], [29.5, 143.0], [29.6, 143.0], [29.7, 144.0], [29.8, 144.0], [29.9, 144.0], [30.0, 144.0], [30.1, 144.0], [30.2, 144.0], [30.3, 144.0], [30.4, 144.0], [30.5, 144.0], [30.6, 144.0], [30.7, 144.0], [30.8, 144.0], [30.9, 144.0], [31.0, 144.0], [31.1, 144.0], [31.2, 144.0], [31.3, 144.0], [31.4, 144.0], [31.5, 144.0], [31.6, 144.0], [31.7, 144.0], [31.8, 144.0], [31.9, 144.0], [32.0, 145.0], [32.1, 145.0], [32.2, 145.0], [32.3, 145.0], [32.4, 145.0], [32.5, 145.0], [32.6, 145.0], [32.7, 145.0], [32.8, 145.0], [32.9, 145.0], [33.0, 145.0], [33.1, 145.0], [33.2, 145.0], [33.3, 146.0], [33.4, 146.0], [33.5, 146.0], [33.6, 146.0], [33.7, 146.0], [33.8, 146.0], [33.9, 146.0], [34.0, 146.0], [34.1, 146.0], [34.2, 146.0], [34.3, 146.0], [34.4, 146.0], [34.5, 147.0], [34.6, 147.0], [34.7, 147.0], [34.8, 147.0], [34.9, 147.0], [35.0, 147.0], [35.1, 147.0], [35.2, 147.0], [35.3, 147.0], [35.4, 147.0], [35.5, 147.0], [35.6, 147.0], [35.7, 147.0], [35.8, 147.0], [35.9, 147.0], [36.0, 147.0], [36.1, 147.0], [36.2, 148.0], [36.3, 148.0], [36.4, 148.0], [36.5, 148.0], [36.6, 148.0], [36.7, 148.0], [36.8, 148.0], [36.9, 148.0], [37.0, 148.0], [37.1, 148.0], [37.2, 148.0], [37.3, 148.0], [37.4, 148.0], [37.5, 149.0], [37.6, 149.0], [37.7, 149.0], [37.8, 149.0], [37.9, 149.0], [38.0, 149.0], [38.1, 149.0], [38.2, 149.0], [38.3, 149.0], [38.4, 149.0], [38.5, 149.0], [38.6, 149.0], [38.7, 149.0], [38.8, 149.0], [38.9, 149.0], [39.0, 149.0], [39.1, 149.0], [39.2, 149.0], [39.3, 149.0], [39.4, 150.0], [39.5, 150.0], [39.6, 150.0], [39.7, 150.0], [39.8, 150.0], [39.9, 150.0], [40.0, 150.0], [40.1, 150.0], [40.2, 150.0], [40.3, 150.0], [40.4, 150.0], [40.5, 150.0], [40.6, 150.0], [40.7, 150.0], [40.8, 151.0], [40.9, 151.0], [41.0, 151.0], [41.1, 151.0], [41.2, 151.0], [41.3, 151.0], [41.4, 151.0], [41.5, 151.0], [41.6, 151.0], [41.7, 151.0], [41.8, 151.0], [41.9, 151.0], [42.0, 151.0], [42.1, 151.0], [42.2, 151.0], [42.3, 151.0], [42.4, 151.0], [42.5, 152.0], [42.6, 152.0], [42.7, 152.0], [42.8, 152.0], [42.9, 152.0], [43.0, 152.0], [43.1, 152.0], [43.2, 152.0], [43.3, 152.0], [43.4, 152.0], [43.5, 153.0], [43.6, 153.0], [43.7, 153.0], [43.8, 153.0], [43.9, 153.0], [44.0, 153.0], [44.1, 153.0], [44.2, 153.0], [44.3, 153.0], [44.4, 153.0], [44.5, 153.0], [44.6, 153.0], [44.7, 153.0], [44.8, 154.0], [44.9, 154.0], [45.0, 154.0], [45.1, 154.0], [45.2, 154.0], [45.3, 154.0], [45.4, 154.0], [45.5, 154.0], [45.6, 154.0], [45.7, 154.0], [45.8, 154.0], [45.9, 154.0], [46.0, 155.0], [46.1, 155.0], [46.2, 155.0], [46.3, 155.0], [46.4, 155.0], [46.5, 155.0], [46.6, 155.0], [46.7, 155.0], [46.8, 155.0], [46.9, 155.0], [47.0, 155.0], [47.1, 155.0], [47.2, 155.0], [47.3, 156.0], [47.4, 156.0], [47.5, 156.0], [47.6, 156.0], [47.7, 156.0], [47.8, 156.0], [47.9, 156.0], [48.0, 156.0], [48.1, 156.0], [48.2, 156.0], [48.3, 156.0], [48.4, 156.0], [48.5, 156.0], [48.6, 156.0], [48.7, 156.0], [48.8, 156.0], [48.9, 157.0], [49.0, 157.0], [49.1, 157.0], [49.2, 157.0], [49.3, 157.0], [49.4, 157.0], [49.5, 158.0], [49.6, 158.0], [49.7, 158.0], [49.8, 158.0], [49.9, 158.0], [50.0, 158.0], [50.1, 158.0], [50.2, 158.0], [50.3, 158.0], [50.4, 158.0], [50.5, 158.0], [50.6, 158.0], [50.7, 158.0], [50.8, 158.0], [50.9, 159.0], [51.0, 159.0], [51.1, 159.0], [51.2, 159.0], [51.3, 159.0], [51.4, 159.0], [51.5, 160.0], [51.6, 160.0], [51.7, 160.0], [51.8, 160.0], [51.9, 160.0], [52.0, 160.0], [52.1, 160.0], [52.2, 160.0], [52.3, 160.0], [52.4, 160.0], [52.5, 160.0], [52.6, 160.0], [52.7, 160.0], [52.8, 160.0], [52.9, 160.0], [53.0, 160.0], [53.1, 160.0], [53.2, 161.0], [53.3, 161.0], [53.4, 161.0], [53.5, 161.0], [53.6, 161.0], [53.7, 161.0], [53.8, 161.0], [53.9, 161.0], [54.0, 162.0], [54.1, 162.0], [54.2, 162.0], [54.3, 162.0], [54.4, 162.0], [54.5, 162.0], [54.6, 162.0], [54.7, 162.0], [54.8, 162.0], [54.9, 163.0], [55.0, 163.0], [55.1, 163.0], [55.2, 163.0], [55.3, 163.0], [55.4, 163.0], [55.5, 163.0], [55.6, 164.0], [55.7, 164.0], [55.8, 164.0], [55.9, 164.0], [56.0, 164.0], [56.1, 164.0], [56.2, 164.0], [56.3, 164.0], [56.4, 165.0], [56.5, 165.0], [56.6, 165.0], [56.7, 165.0], [56.8, 165.0], [56.9, 166.0], [57.0, 166.0], [57.1, 166.0], [57.2, 166.0], [57.3, 166.0], [57.4, 167.0], [57.5, 167.0], [57.6, 167.0], [57.7, 167.0], [57.8, 167.0], [57.9, 167.0], [58.0, 167.0], [58.1, 167.0], [58.2, 168.0], [58.3, 168.0], [58.4, 168.0], [58.5, 168.0], [58.6, 168.0], [58.7, 169.0], [58.8, 169.0], [58.9, 169.0], [59.0, 169.0], [59.1, 169.0], [59.2, 169.0], [59.3, 169.0], [59.4, 169.0], [59.5, 169.0], [59.6, 169.0], [59.7, 170.0], [59.8, 170.0], [59.9, 170.0], [60.0, 170.0], [60.1, 171.0], [60.2, 171.0], [60.3, 171.0], [60.4, 171.0], [60.5, 171.0], [60.6, 171.0], [60.7, 172.0], [60.8, 172.0], [60.9, 172.0], [61.0, 173.0], [61.1, 173.0], [61.2, 173.0], [61.3, 173.0], [61.4, 173.0], [61.5, 173.0], [61.6, 174.0], [61.7, 174.0], [61.8, 175.0], [61.9, 175.0], [62.0, 175.0], [62.1, 176.0], [62.2, 176.0], [62.3, 176.0], [62.4, 176.0], [62.5, 176.0], [62.6, 176.0], [62.7, 177.0], [62.8, 177.0], [62.9, 177.0], [63.0, 177.0], [63.1, 178.0], [63.2, 178.0], [63.3, 178.0], [63.4, 178.0], [63.5, 178.0], [63.6, 178.0], [63.7, 179.0], [63.8, 180.0], [63.9, 180.0], [64.0, 180.0], [64.1, 180.0], [64.2, 180.0], [64.3, 181.0], [64.4, 181.0], [64.5, 181.0], [64.6, 181.0], [64.7, 182.0], [64.8, 183.0], [64.9, 184.0], [65.0, 184.0], [65.1, 184.0], [65.2, 184.0], [65.3, 184.0], [65.4, 185.0], [65.5, 185.0], [65.6, 186.0], [65.7, 186.0], [65.8, 186.0], [65.9, 188.0], [66.0, 189.0], [66.1, 189.0], [66.2, 190.0], [66.3, 191.0], [66.4, 192.0], [66.5, 193.0], [66.6, 193.0], [66.7, 193.0], [66.8, 194.0], [66.9, 195.0], [67.0, 195.0], [67.1, 196.0], [67.2, 196.0], [67.3, 197.0], [67.4, 198.0], [67.5, 198.0], [67.6, 200.0], [67.7, 201.0], [67.8, 202.0], [67.9, 203.0], [68.0, 203.0], [68.1, 204.0], [68.2, 206.0], [68.3, 208.0], [68.4, 210.0], [68.5, 211.0], [68.6, 212.0], [68.7, 213.0], [68.8, 214.0], [68.9, 221.0], [69.0, 223.0], [69.1, 224.0], [69.2, 225.0], [69.3, 226.0], [69.4, 236.0], [69.5, 237.0], [69.6, 240.0], [69.7, 241.0], [69.8, 244.0], [69.9, 247.0], [70.0, 251.0], [70.1, 256.0], [70.2, 265.0], [70.3, 269.0], [70.4, 274.0], [70.5, 276.0], [70.6, 278.0], [70.7, 287.0], [70.8, 301.0], [70.9, 307.0], [71.0, 355.0], [71.1, 382.0], [71.2, 392.0], [71.3, 394.0], [71.4, 408.0], [71.5, 411.0], [71.6, 417.0], [71.7, 418.0], [71.8, 420.0], [71.9, 437.0], [72.0, 479.0], [72.1, 502.0], [72.2, 506.0], [72.3, 506.0], [72.4, 533.0], [72.5, 562.0], [72.6, 704.0], [72.7, 705.0], [72.8, 740.0], [72.9, 759.0], [73.0, 799.0], [73.1, 799.0], [73.2, 812.0], [73.3, 839.0], [73.4, 879.0], [73.5, 884.0], [73.6, 913.0], [73.7, 1061.0], [73.8, 1118.0], [73.9, 1120.0], [74.0, 1125.0], [74.1, 1125.0], [74.2, 1127.0], [74.3, 1130.0], [74.4, 1130.0], [74.5, 1131.0], [74.6, 1132.0], [74.7, 1132.0], [74.8, 1132.0], [74.9, 1133.0], [75.0, 1133.0], [75.1, 1133.0], [75.2, 1133.0], [75.3, 1133.0], [75.4, 1134.0], [75.5, 1134.0], [75.6, 1134.0], [75.7, 1134.0], [75.8, 1135.0], [75.9, 1136.0], [76.0, 1136.0], [76.1, 1137.0], [76.2, 1137.0], [76.3, 1137.0], [76.4, 1137.0], [76.5, 1137.0], [76.6, 1138.0], [76.7, 1138.0], [76.8, 1138.0], [76.9, 1138.0], [77.0, 1139.0], [77.1, 1139.0], [77.2, 1139.0], [77.3, 1139.0], [77.4, 1140.0], [77.5, 1140.0], [77.6, 1140.0], [77.7, 1140.0], [77.8, 1140.0], [77.9, 1141.0], [78.0, 1141.0], [78.1, 1141.0], [78.2, 1141.0], [78.3, 1142.0], [78.4, 1142.0], [78.5, 1142.0], [78.6, 1142.0], [78.7, 1143.0], [78.8, 1143.0], [78.9, 1143.0], [79.0, 1144.0], [79.1, 1144.0], [79.2, 1144.0], [79.3, 1145.0], [79.4, 1145.0], [79.5, 1145.0], [79.6, 1145.0], [79.7, 1145.0], [79.8, 1146.0], [79.9, 1146.0], [80.0, 1147.0], [80.1, 1147.0], [80.2, 1147.0], [80.3, 1147.0], [80.4, 1148.0], [80.5, 1148.0], [80.6, 1148.0], [80.7, 1148.0], [80.8, 1148.0], [80.9, 1148.0], [81.0, 1148.0], [81.1, 1149.0], [81.2, 1149.0], [81.3, 1149.0], [81.4, 1150.0], [81.5, 1150.0], [81.6, 1150.0], [81.7, 1150.0], [81.8, 1150.0], [81.9, 1150.0], [82.0, 1151.0], [82.1, 1151.0], [82.2, 1151.0], [82.3, 1151.0], [82.4, 1152.0], [82.5, 1152.0], [82.6, 1152.0], [82.7, 1152.0], [82.8, 1153.0], [82.9, 1153.0], [83.0, 1153.0], [83.1, 1153.0], [83.2, 1154.0], [83.3, 1155.0], [83.4, 1155.0], [83.5, 1155.0], [83.6, 1156.0], [83.7, 1156.0], [83.8, 1156.0], [83.9, 1157.0], [84.0, 1158.0], [84.1, 1158.0], [84.2, 1158.0], [84.3, 1158.0], [84.4, 1158.0], [84.5, 1159.0], [84.6, 1159.0], [84.7, 1159.0], [84.8, 1160.0], [84.9, 1160.0], [85.0, 1160.0], [85.1, 1160.0], [85.2, 1161.0], [85.3, 1161.0], [85.4, 1161.0], [85.5, 1162.0], [85.6, 1162.0], [85.7, 1162.0], [85.8, 1162.0], [85.9, 1163.0], [86.0, 1163.0], [86.1, 1164.0], [86.2, 1164.0], [86.3, 1164.0], [86.4, 1165.0], [86.5, 1165.0], [86.6, 1167.0], [86.7, 1167.0], [86.8, 1168.0], [86.9, 1168.0], [87.0, 1168.0], [87.1, 1169.0], [87.2, 1169.0], [87.3, 1170.0], [87.4, 1171.0], [87.5, 1175.0], [87.6, 1175.0], [87.7, 1175.0], [87.8, 1175.0], [87.9, 1176.0], [88.0, 1178.0], [88.1, 1179.0], [88.2, 1183.0], [88.3, 1184.0], [88.4, 1188.0], [88.5, 1195.0], [88.6, 1199.0], [88.7, 1200.0], [88.8, 1204.0], [88.9, 1222.0], [89.0, 1231.0], [89.1, 1231.0], [89.2, 1239.0], [89.3, 1241.0], [89.4, 1247.0], [89.5, 1293.0], [89.6, 1301.0], [89.7, 1311.0], [89.8, 1319.0], [89.9, 1362.0], [90.0, 1380.0], [90.1, 1395.0], [90.2, 1397.0], [90.3, 1411.0], [90.4, 1432.0], [90.5, 1482.0], [90.6, 1485.0], [90.7, 1576.0], [90.8, 1580.0], [90.9, 1604.0], [91.0, 1613.0], [91.1, 1655.0], [91.2, 1693.0], [91.3, 1727.0], [91.4, 1808.0], [91.5, 1811.0], [91.6, 1820.0], [91.7, 1845.0], [91.8, 1846.0], [91.9, 1853.0], [92.0, 1865.0], [92.1, 1870.0], [92.2, 1878.0], [92.3, 1880.0], [92.4, 1916.0], [92.5, 1917.0], [92.6, 1919.0], [92.7, 1970.0], [92.8, 1974.0], [92.9, 2025.0], [93.0, 2031.0], [93.1, 2046.0], [93.2, 2062.0], [93.3, 2071.0], [93.4, 2088.0], [93.5, 2089.0], [93.6, 2106.0], [93.7, 2111.0], [93.8, 2112.0], [93.9, 2132.0], [94.0, 2137.0], [94.1, 2144.0], [94.2, 2155.0], [94.3, 2161.0], [94.4, 2189.0], [94.5, 2200.0], [94.6, 2208.0], [94.7, 2219.0], [94.8, 2244.0], [94.9, 2278.0], [95.0, 2297.0], [95.1, 2297.0], [95.2, 2298.0], [95.3, 2344.0], [95.4, 2388.0], [95.5, 2427.0], [95.6, 2433.0], [95.7, 2447.0], [95.8, 2461.0], [95.9, 2499.0], [96.0, 2501.0], [96.1, 2509.0], [96.2, 2521.0], [96.3, 2554.0], [96.4, 2574.0], [96.5, 2577.0], [96.6, 2582.0], [96.7, 2592.0], [96.8, 2595.0], [96.9, 2602.0], [97.0, 2616.0], [97.1, 2616.0], [97.2, 2623.0], [97.3, 2631.0], [97.4, 2636.0], [97.5, 2743.0], [97.6, 2768.0], [97.7, 2802.0], [97.8, 2855.0], [97.9, 2870.0], [98.0, 2915.0], [98.1, 2921.0], [98.2, 2961.0], [98.3, 2963.0], [98.4, 2968.0], [98.5, 2975.0], [98.6, 2985.0], [98.7, 3007.0], [98.8, 3032.0], [98.9, 3066.0], [99.0, 3085.0], [99.1, 3100.0], [99.2, 3127.0], [99.3, 3142.0], [99.4, 3174.0], [99.5, 3175.0], [99.6, 3176.0], [99.7, 3194.0], [99.8, 3201.0], [99.9, 3636.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 676.0, "series": [{"data": [[700.0, 6.0], [800.0, 4.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 149.0], [1200.0, 9.0], [1300.0, 7.0], [1400.0, 4.0], [1500.0, 2.0], [1600.0, 4.0], [100.0, 676.0], [1700.0, 1.0], [1800.0, 10.0], [1900.0, 5.0], [2000.0, 7.0], [2100.0, 9.0], [2200.0, 8.0], [2300.0, 2.0], [2400.0, 5.0], [2500.0, 9.0], [2600.0, 6.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 7.0], [3000.0, 4.0], [3100.0, 7.0], [200.0, 32.0], [3200.0, 1.0], [3600.0, 1.0], [300.0, 6.0], [400.0, 7.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 721.0, "series": [{"data": [[0.0, 721.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 185.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 93.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 23.466000000000026, "minX": 1.77270432E12, "maxY": 23.466000000000026, "series": [{"data": [[1.77270432E12, 23.466000000000026]], "isOverall": false, "label": "users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77270432E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 202.9473684210526, "minX": 1.0, "maxY": 3174.0, "series": [{"data": [[2.0, 1199.0], [3.0, 1131.0], [5.0, 1157.0], [6.0, 1155.0], [7.0, 661.0], [8.0, 202.9473684210526], [9.0, 205.0], [10.0, 275.0384615384616], [11.0, 345.49999999999994], [12.0, 261.2564102564103], [13.0, 357.44444444444446], [14.0, 404.9166666666666], [15.0, 333.0163934426229], [16.0, 314.69767441860466], [17.0, 321.4237288135593], [18.0, 394.3191489361702], [19.0, 400.7777777777776], [20.0, 309.17241379310343], [21.0, 522.2833333333331], [22.0, 399.8433734939759], [23.0, 397.2631578947368], [24.0, 465.8196721311475], [25.0, 393.8333333333333], [26.0, 378.5384615384615], [27.0, 774.4761904761906], [28.0, 1239.6], [29.0, 3142.0], [30.0, 1694.5], [31.0, 3067.0], [33.0, 2598.0], [32.0, 2510.25], [35.0, 2088.0], [34.0, 2855.0], [37.0, 1268.5], [36.0, 2025.0], [39.0, 2427.5], [43.0, 2107.0], [42.0, 2433.0], [45.0, 2968.0], [44.0, 2089.0], [46.0, 2278.0], [53.0, 2547.8333333333335], [52.0, 1715.6666666666667], [55.0, 2515.5], [57.0, 1301.0], [56.0, 1311.0], [59.0, 2616.0], [58.0, 1293.0], [61.0, 2521.0], [60.0, 1829.0], [63.0, 1974.0], [62.0, 2602.0], [67.0, 1175.0], [66.0, 1183.0], [65.0, 2556.0], [70.0, 2461.0], [69.0, 2631.0], [68.0, 2743.0], [75.0, 879.0], [72.0, 1480.5], [79.0, 2039.5], [78.0, 1061.0], [76.0, 1349.3333333333333], [82.0, 2031.0], [80.0, 2112.0], [86.0, 1613.0], [85.0, 2616.0], [84.0, 1768.0], [91.0, 2584.5], [89.0, 2592.0], [95.0, 1576.0], [94.0, 1727.0], [93.0, 1648.0], [99.0, 839.0], [98.0, 2577.0], [97.0, 1044.0], [103.0, 1310.5], [102.0, 2312.5], [101.0, 1878.0], [107.0, 812.0], [111.0, 799.0], [109.0, 2501.0], [115.0, 1432.0], [113.0, 1970.0], [118.0, 1232.9090909090908], [116.0, 759.0], [1.0, 3174.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[23.465000000000014, 546.3220000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 118.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4383.333333333333, "minX": 1.77270432E12, "maxY": 19118.733333333334, "series": [{"data": [[1.77270432E12, 19118.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77270432E12, 4383.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77270432E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 546.3220000000003, "minX": 1.77270432E12, "maxY": 546.3220000000003, "series": [{"data": [[1.77270432E12, 546.3220000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77270432E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 543.7919999999999, "minX": 1.77270432E12, "maxY": 543.7919999999999, "series": [{"data": [[1.77270432E12, 543.7919999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77270432E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 447.7549999999993, "minX": 1.77270432E12, "maxY": 447.7549999999993, "series": [{"data": [[1.77270432E12, 447.7549999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77270432E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 116.0, "minX": 1.77270432E12, "maxY": 3636.0, "series": [{"data": [[1.77270432E12, 3636.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77270432E12, 116.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77270432E12, 1380.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77270432E12, 3085.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77270432E12, 158.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77270432E12, 2297.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77270432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 142.5, "minX": 1.0, "maxY": 3174.0, "series": [{"data": [[8.0, 1151.0], [36.0, 149.0], [38.0, 148.0], [45.0, 151.0], [47.0, 146.5], [46.0, 142.5], [50.0, 146.5], [52.0, 151.0], [57.0, 144.0], [15.0, 799.0], [64.0, 155.5], [1.0, 3174.0], [89.0, 178.0], [118.0, 2028.0], [31.0, 1134.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[45.0, 1175.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 142.5, "minX": 1.0, "maxY": 3174.0, "series": [{"data": [[8.0, 1151.0], [36.0, 149.0], [38.0, 148.0], [45.0, 151.0], [47.0, 146.5], [46.0, 142.5], [50.0, 146.5], [52.0, 151.0], [57.0, 144.0], [15.0, 799.0], [64.0, 155.0], [1.0, 3174.0], [89.0, 178.0], [118.0, 1999.0], [31.0, 1134.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[45.0, 192.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.77270432E12, "maxY": 16.666666666666668, "series": [{"data": [[1.77270432E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77270432E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77270432E12, "maxY": 16.65, "series": [{"data": [[1.77270432E12, 16.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77270432E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77270432E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77270432E12, "maxY": 16.65, "series": [{"data": [[1.77270432E12, 16.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77270432E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77270432E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77270432E12, "maxY": 16.65, "series": [{"data": [[1.77270432E12, 16.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77270432E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77270432E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

