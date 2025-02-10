import whisper
import sys

# Load the Whisper model
model = whisper.load_model("base")

audio_file = sys.argv[1]

# Transcribe audio
result = model.transcribe(audio_file)
print(result["text"])