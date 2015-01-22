#測試 Use Case 文件

模擬使用者使用 xxxxxx

## 測試工具
Firefox [Selenium IDE](http://docs.seleniumhq.org/projects/ide/)<br/>
Firefox [Selenium IDE: Flow Control](https://addons.mozilla.org/en-US/firefox/addon/flow-control/)<br/>
Firefox [Selenium IDE: ScreenShot on Fail](https://addons.mozilla.org/en-US/firefox/addon/screenshot-on-fail-selenium/)<br/>
Firefox [Selenium IDE: Highlight Elements](https://addons.mozilla.org/en-US/firefox/addon/highlight-elements-selenium-id/)<br/>

## 開發注意事項
1. Selenium IDE 抓去 DOM 路徑採用 XPath 的方式 *//tr[last()]/td[5]/a[2]/i*
2. 建議，click 前使用 waitForElementPresent 確保該 element 已出現；若該 element 的出現時間不是固定，設定多個 waitForElementPresent 等待。
3. 統一使用 waitForElementPresent, 避免 waitForVisible（兩個功能一樣）
4. 針對 type，若必須觸發像鍵盤手動輸入的效果（觸發 key event），需接著用 typeKeys, sendKeys
5. 注意 click 和 clickAndWait 的差別 [#](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp#building-test-cases)
6. assert - 錯誤的話換 case; verify - 錯誤的話繼續 case
7. 使用 waitForLocation，避免 verifyLocation (verify 沒有 wait，所以選擇測試速度最快的時候會 error，waitForLocation verifyLocation 兩個最終同樣的效果)
8. timeout 預設為 30s

## 測試開始前

###開始瀏覽器無痕視窗

1. 選擇是否使用**已知資料**（個別 Suite 測試時使用） 或者 **註冊新帳號**（從頭到尾測試時使用）
2. 將 **user-extension.js** plugin 載入
3. 設定 `ScreenShot on Fail` 儲存得位置（可省略）
4. 點擊 Highlight 功能（可省略）
5. 調整測試速度－為達到最佳效果，建議將速度調整為中間(middle) *google 搜尋 'Selenium IDE too fast'*
6. 記得開啓瀏覽器 javascript popup [開啓popup](https://cloud.githubusercontent.com/assets/2560096/2954401/7b8bde8e-da71-11e3-89f3-f5b7d577ea0c.png)
7. 目前狀況－xxx

## 測試開始

###設定變數

全域變數

Description | Variable | Description | Variable | Description | Variable
:---------:|:------------:|:---------:|:---------:|:---------:|:------------:
萬用驗證碼 | verifyNumber | 網站url | domain | email網站url | emailDomain
錯誤訊息 | errorMessage | | | |

...

## 測試結束

登出以及取消鏈接fb

## user-extension.js

1. storeRandomPhone - 產生一組電話號碼（台灣） 並 儲存
2. storeRandomPass - 產生一組密碼 並 儲存
3. storeRandomName - 產生一組名字 並 儲存
4. storeRandomDescription - 產生一組介紹 並 儲存
5. storeRandomAddress - 產生一組地址 並 儲存
