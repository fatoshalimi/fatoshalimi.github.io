## Free Speech-to-Text AI Tool for Transcription Using Google Colab

**Author**: Fatos Halimi  
**Date**: 2022-09-28  
**Tags**: OpenAI, Whisper, Interview Transcription  

[Whisper](https://github.com/openai/whisper) is OpenAI’s automatic speech recognition (ASR) tool, trained on 680,000 hours of labeled data from the internet. It’s available for free on [GitHub](https://github.com/openai/whisper), providing an accessible way to transcribe audio and translate it into other languages.

In this post, we’ll look at how to use Whisper and Google Colab to easily and freely transcribe an interview recording.

### What is Google Colab?

Google Colab is a cloud-based tool for writing and running code—think Google Docs but for Python coding. It’s especially useful if you don’t have a powerful computer at home.

### Using Whisper with Google Colab

1. **Create a Google Colab Notebook**  
   Open [Google Colab](https://colab.research.google.com/#create=true) to start a new notebook. You can also go to Google Drive, right-click, select “More,” and choose Google Colaboratory.

   ![](/images/Google_Drive_Collab.png)  
   The notebook will be named "Untitled.ipynb" by default.

2. **Enable GPU**  
   Next, enable the GPU in Colab for faster processing. Go to “Runtime” > “Change runtime type,” select “GPU” under Hardware Accelerator, and save.

   ![](/images/Google_Collab_Runtime.png)![](/images/Google_Collab_GPU.png)

3. **Install Whisper**  
   In a new code cell, paste the following lines and run them using the play button (or with `CTRL + Enter`):

   ```python
   !pip install git+https://github.com/openai/whisper.git 
   !sudo apt update && sudo apt install ffmpeg
   ```

   ![](/images/Google_Collab_whisper_install.png)  
   This installs Whisper in the notebook. (For further setup options, see [Whisper’s GitHub setup page](https://github.com/openai/whisper#setup).)

   > The `!` symbol at the start of each line indicates that these commands are shell scripts, not Python code. If you’re running Whisper on your own computer, you can omit the `!`.

4. **Upload Audio File**  
   To transcribe audio, upload it to Google Colab. You can drag and drop the file into the Colab file explorer or use the upload button.

   ![](/images/Google_Collab_File_Upload.png)

5. **Transcribe with Whisper**  
   Add a second code cell, click “+ Code,” and paste the following:

   ```python
   !whisper "test_interview.m4a" --model medium --language German
   ```

   Hit the play button (or `CTRL + Enter`) to run the code. Here, I used the Medium model with German as the language parameter. The transcribed files will appear in the file explorer once the transcription is complete.

   ![](/images/Google_Collab_whisper.png)

### Whisper Models

Whisper offers several [model options](https://github.com/openai/whisper#available-models-and-languages) for different levels of accuracy and speed. The default is the Small model, which is faster but less accurate. For more accurate transcriptions, use a larger model.

> A model is a statistical representation of the Speech-to-Text engine trained to recognize and convert spoken language into text. Different models are optimized for various tasks.

### Whisper Command-Line Options

To view all Whisper options in Colab:

   ```python
   !whisper -h
   ```

### Summary

We’ve covered the basics of transcribing with Google Colab and Whisper by running the transcription tool in Google Colab’s command line.

**Happy Transcribing!**

### Resources

- OpenAI Blog Post: ["Introducing Whisper"](https://openai.com/blog/whisper/)
- Whisper GitHub Repository: [https://github.com/openai/whisper](https://github.com/openai/whisper)
- Google Colab FAQ: [https://research.google.com/colaboratory/faq.html](https://research.google.com/colaboratory/faq.html)
