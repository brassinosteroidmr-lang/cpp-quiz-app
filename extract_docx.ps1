# PowerShell script to extract text from DOCX files
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Extract-DocxText {
    param(
        [string]$FilePath
    )
    
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($FilePath)
        $entry = $zip.GetEntry('word/document.xml')
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $content = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        $zip.Dispose()
        
        # Extract text from XML using regex
        $textPattern = '<w:t[^>]*>([^<]*)</w:t>'
        $matches = [regex]::Matches($content, $textPattern)
        $text = ""
        foreach ($match in $matches) {
            $text += $match.Groups[1].Value + " "
        }
        
        return $text.Trim()
    }
    catch {
        return "Error: $_"
    }
}

# Process each DOCX file
$files = @('マネジメントガイド.docx', '知識ガイド1.docx', '知識ガイド2.docx', '知識ガイド3.docx')

foreach ($file in $files) {
    Write-Host "`n==============================================="
    Write-Host "ファイル: $file"
    Write-Host "==============================================="
    
    $fullPath = "C:\GEMINI\$file"
    $text = Extract-DocxText -FilePath $fullPath
    
    Write-Host "文字数: $($text.Length) 文字"
    Write-Host "`n内容（最初の800文字）:"
    if ($text.Length -gt 800) {
        Write-Host $text.Substring(0, 800)
        Write-Host "`n..."
    } else {
        Write-Host $text
    }
    Write-Host ""
}