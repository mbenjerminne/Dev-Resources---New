package com.codeinfluencer.devresources


import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.view.KeyEvent
import android.webkit.WebView
import android.webkit.WebViewClient
import com.google.android.gms.ads.doubleclick.PublisherAdRequest
import com.google.android.gms.ads.doubleclick.PublisherInterstitialAd



class MainActivity : AppCompatActivity() {


    private lateinit var mPublisherInterstitialAd: PublisherInterstitialAd
    private lateinit var myWebView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        //Web View
        myWebView = findViewById(R.id.webview)
        myWebView.loadUrl("file:///android_asset/index.html")
        myWebView.settings.javaScriptEnabled = true
        myWebView.settings.domStorageEnabled = true

        myWebView.webViewClient = WebViewClient()
        myWebView.addJavascriptInterface(WebAppInterface(this), "Android")


        //AD Activities
        mPublisherInterstitialAd = PublisherInterstitialAd(this)
        mPublisherInterstitialAd.adUnitId = "ca-app-pub-1624201749916009/7363459869"
        //My AD Unit ID: ca-app-pub-1624201749916009/7363459869
        //Example AD Unit ID: /6499/example/interstitial




        fun show(){
            //Toast.makeText(this,"Interstitial Ad",Toast.LENGTH_SHORT).show()
            mPublisherInterstitialAd.loadAd(PublisherAdRequest.Builder().build())
            mPublisherInterstitialAd.show()
        }


        val ha = Handler()

        ha.postDelayed(object : Runnable {

            override fun run() {
                show()

                ha.postDelayed(this, 90000)
            }
        }, 80000)

    }

    //Handle the back button
    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        // Check if the key event was the Back button and if there's history
        if (keyCode == KeyEvent.KEYCODE_BACK && myWebView.canGoBack()) {
            myWebView.goBack()
            return true
        }
        // If it wasn't the Back key or there's no web page history, bubble up to the default
        // system behavior (probably exit the activity)
        return super.onKeyDown(keyCode, event)
    }
}

