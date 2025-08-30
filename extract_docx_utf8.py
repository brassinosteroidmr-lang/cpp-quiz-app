import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path
import re
import sys

# Set UTF-8 encoding for console output
sys.stdout.reconfigure(encoding='utf-8')

def extract_docx_text(file_path):
    """Extract text from docx file with proper Japanese encoding"""
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_file:
            xml_content = zip_file.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            # Define namespaces
            namespaces = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            
            # Extract text from all text elements
            text_elements = []
            for t in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                if t.text:
                    text_elements.append(t.text)
            
            return ' '.join(text_elements)
    except Exception as e:
        return f'Error reading {file_path}: {str(e)}'

def analyze_docx_structure(file_path):
    """Analyze docx structure to identify potential formatting issues"""
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_file:
            xml_content = zip_file.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            info = {
                'paragraphs': len(root.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p')),
                'tables': len(root.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tbl')),
                'images': len(root.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}drawing')),
                'breaks': len(root.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}br'))
            }
            return info
    except Exception as e:
        return f'Error analyzing {file_path}: {str(e)}'

def save_text_to_file(filename, content):
    """Save extracted text to a UTF-8 encoded text file"""
    output_file = filename.replace('.docx', '_extracted.txt')
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Saved extracted text to: {output_file}")
        return output_file
    except Exception as e:
        print(f"Error saving {output_file}: {str(e)}")
        return None

# Process all docx files
files = ['マネジメントガイド.docx', '知識ガイド1.docx', '知識ガイド2.docx', '知識ガイド3.docx']

for file in files:
    print(f'\n{"="*50}')
    print(f'ファイル: {file}')
    print(f'{"="*50}')
    
    # Extract structure info
    structure = analyze_docx_structure(file)
    print(f'構造分析: {structure}')
    
    # Extract text content
    content = extract_docx_text(file)
    print(f'\n文字数: {len(content)}文字')
    
    # Save to text file
    saved_file = save_text_to_file(file, content)
    
    print(f'\n内容（最初の500文字）:')
    print(content[:500])
    if len(content) > 500:
        print('\n...\n')
        print('最後の500文字:')
        print(content[-500:])
    print('\n')