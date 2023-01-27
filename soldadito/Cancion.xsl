<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="Cancion.css" />
			</head>
			<body>
				<h1> <xsl:value-of select="Cancion/titulo"></xsl:value-of></h1>
				<h2>
					<xsl:value-of select="Cancion/artista"></xsl:value-of>
				</h2>

				<xsl:for-each select="Cancion/estrofa">
					<h3>Estrofa</h3>
						<xsl:for-each select="verso">
						<span STYLE="font-style:italic">
						<p>
						<xsl:value-of select="."/>
						</p>
						</span>
						</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>